import React, { useCallback, useEffect, useMemo, useState } from "react";
import { createEditor, Editor, Text, Transforms } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import EditorWidgets from "../EditorWidgets/EditorWidgets";
import DefaultElement from "./DefaultElement";
import Leaf from "./Leaf";

const EditorBox = ({ socket }) => {
  const [editor] = useState(() => withReact(createEditor()));
  const [initialValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ]);
  const userId = useMemo(() => {
    localStorage.getItem("token");
  });

  useEffect(() => {
    if (socket) {
      socket.on("input-by-user", (data) => {
        const parsedData = JSON.parse(data);
        Transforms.select(editor, { path: [0, 0], offset: 3 });
        editor.children = parsedData;
        editor.onChange();
      });
    }
  }, [socket, editor]);

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  const CustomEditor = {
    isBoldMarkActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: (n) => n.bold === true,
        universal: true,
      });

      return !!match;
    },
    isItalicMarkActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: (n) => n.italic === true,
        universal: true,
      });

      return !!match;
    },
    isUnderlineMarkActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: (n) => n.underline === true,
        universal: true,
      });

      return !!match;
    },

    toggleBoldMark(editor) {
      const isActive = CustomEditor.isBoldMarkActive(editor);
      Transforms.setNodes(
        editor,
        { bold: isActive ? null : true },
        { match: (n) => Text.isText(n), split: true }
      );
    },
    toggleItalicMark(editor) {
      const isActive = CustomEditor.isItalicMarkActive(editor);
      Transforms.setNodes(
        editor,
        { italic: isActive ? null : true },
        { match: (n) => Text.isText(n), split: true }
      );
    },

    toggleUnderlineMark(editor) {
      const isActive = CustomEditor.isUnderlineMarkActive(editor);
      Transforms.setNodes(
        editor,
        { underline: isActive ? null : true },
        { match: (n) => Text.isText(n), split: true }
      );
    },
  };

  function boldHandler() {
    CustomEditor.toggleBoldMark(editor);
  }
  function italicHandler() {
    CustomEditor.toggleItalicMark(editor);
  }
  function underlineHandler() {
    CustomEditor.toggleUnderlineMark(editor);
  }
  return (
    <>
      <EditorWidgets
        boldHandler={boldHandler}
        italicHandler={italicHandler}
        underlineHandler={underlineHandler}
      />
      <div className="px-12">
        <div className="p-5 w-full border rounded-xl">
          <Slate
            editor={editor}
            value={initialValue}
            onChange={(value) => {
              const isAstChange = editor.operations.some(
                (op) => "set_selection" !== op.type
              );
              if (isAstChange) {
                const content = JSON.stringify(value);
                console.log(value);
                localStorage.setItem("content", content);
                socket.emit(
                  "input-by-user",
                  content,
                  "6337e050de39fc7d9b8e008b"
                );
              }
            }}
          >
            <Editable
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              onKeyDown={(event) => {
                if (!event.ctrlKey) {
                  return;
                }

                switch (event.key) {
                  case "`": {
                    event.preventDefault();
                    const [match] = Editor.nodes(editor, {
                      match: (n) => n.type === "code",
                    });
                    Transforms.setNodes(
                      editor,
                      { type: match ? "paragraph" : "code" },
                      { match: (n) => Editor.isBlock(editor, n) }
                    );
                    break;
                  }

                  case "b": {
                    event.preventDefault();
                    Transforms.setNodes(
                      editor,
                      { bold: true },

                      { match: (n) => Text.isText(n), split: true }
                    );
                    break;
                  }

                  case "i": {
                    event.preventDefault();
                    Transforms.setNodes(
                      editor,
                      { italic: true },

                      { match: (n) => Text.isText(n), split: true }
                    );
                    break;
                  }
                }
              }}
            />
          </Slate>
        </div>
      </div>
    </>
  );
};

export default EditorBox;
