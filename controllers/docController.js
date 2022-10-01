const Doc = require("../models/docModel");

exports.create = async (req, res) => {
  try {
    const user = req.user;
    const { title } = req.body;
    const doc = await Doc.create({ title, author: user._id });
    return res.status(200).json({
      status: "success",
      data: doc,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: "Something went wrong",
    });
  }
};

exports.getOne = async (req, res) => {
  try {
    console.log("dasfnkljnDSDS");
    const user = req.user;
    const docId = req.params.docId;
    const doc = await Doc.findOne({ docId });
    if (doc && !doc.data) {
      doc["data"] = JSON.stringify([
        {
          type: "paragraph",
          children: [{ text: "A line of text in a paragraph." }],
        },
      ]);
    }
    return res.status(200).json({
      status: "success",
      data: doc ? doc : [],
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: "Something went wrong",
    });
  }
};

exports.get = async (req, res) => {
  try {
    const user = req.user;
    const doc = await Doc.find({ author: user._id });
    return res.status(200).json({
      status: "success",
      data: doc,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: "Something went wrong",
    });
  }
};

exports.saveDoc = async (roomId, data) => {
  try {
    console.log(roomId, data);
    await Doc.findOneAndUpdate({ docId: roomId }, { data });
  } catch (error) {
    console.log(error);
  }
};

exports.saveActivity = async (req, res) => {
  try {
    const { activity, docId } = req.body;
    const doc = await Doc.findOneAndUpdate({ docId }, { $push: { activity } });
    return res.status(200).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: "Something went wrong",
    });
  }
};

exports.saveNotes = async (req, res) => {
  try {
    const { notes, docId } = req.body;
    const doc = await Doc.findOneAndUpdate({ docId }, { $push: { notes } });
    return res.status(200).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: "Something went wrong",
    });
  }
};
