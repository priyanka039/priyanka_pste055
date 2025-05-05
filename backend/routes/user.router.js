// routes/user.router.js
const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);

module.exports = router;
