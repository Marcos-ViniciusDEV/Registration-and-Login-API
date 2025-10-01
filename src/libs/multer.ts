import multer from "multer";

// const diskStorage = multer.diskStorage({
//   filename: (req, file, cb) => {
//     const prefix = Math.floor(Math.random() * 9999) + "-file-";
//     cb(null, prefix + file.originalname + ".jpg");
//   },
//   destination: (req, file, cb) => {
//     cb(null, "./public/uploads/");
//   },
// });

// export const uploader = multer({
//   storage: diskStorage,
// });

export const uploader = multer({
  dest: "./tmp",
});
