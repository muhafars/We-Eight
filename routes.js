const router = require("express").Router();

// Static routes
router.get("/", (req, res, next) => {
  const { page, total } = req.query; //http://localhost:3001/?page=5&total=3
  res.send({
    status: "Alhamdulillah Success!",
    message: "Berhasil berjalan",
    page,
    total,
  });
});

// Dynamic routes
router.get("/products/:id", (req, res, next) => {
  res.json({
    id: req.params.id,
  });
  next();
});
//
router.post("/products", (req, res, next) => {
  res.json(req.body);
});
// Dynamic routes dengan destructuring
router.get("/:category/:tag", (req, res, next) => {
  const { category, tag } = req.params;
  res.json({
    category: category, //cara 1
    tag, //cara 2 //note bisa sama isi dan paramnya
  });
});
module.exports = router;

/**
 * ~ Explain
 * 1.Mengirimkan dengan request query di tandai dengan "?" => http://localhost:3001/?page=5&total=3
 * 2.Mengirimkan dengan request params => http://localhost:3001/products
 *  2.1 Req.Params dapat memanfaatkan destructuring object jadi tidak perlu menlist secara explisit param url
 *  2.2 Req.Params dapat pula menulis secara explisit param url
 * 3.1 Object dapat dituliskan dengan tanpa batas
 * 3.2 Object jika inisilaisasi sama dengan isi dr objec yang dikirim dapat dituliskan secara lgsg tanpa perlu menuli isi dari inisialiasinya
 * 4.Dengan express tidak memerlukan lagi yg namanya jsonstringify
 */
