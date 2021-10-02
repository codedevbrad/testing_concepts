const User = require("./user.model");

//CREATE-ONE
exports.createOne = async (req, res, next) => {
	try {
		const USER_MODEL = {
			username: req.body.username,
			password: req.body.password
        }
	
		try {
			const user = await User.create( USER_MODEL );
			return res.status(201).json( user );

		} catch (error) {
			console.log('ERROR in createOne ' + "User:" , error );
			return res.status(500).json(error);
		}

	} catch (error) {
		return res.status(400).json("Bad Request");
	}
};

//GET-ALL
exports.getAll = async (req, res, next) => {
	try {
		const ALL = await User.findAll();
		console.log("OK getAll User: ", ALL.map(el => el.dataValues));
		return res.status(200).json(ALL);
	} catch (error) {
		console.log('ERROR in getAll ' + "User:", error);
		return res.status(500).json(error);
	}
};

//GET-ONE
exports.getOne = async (req, res, next) => {
	try {
		const u = await User.findByPk(req.params.id);
		console.log("OK getOne User: ", u.dataValues);
		return res.status(200).json(u);
	} catch (error) {
		console.log('ERROR in getOne ' + "User:", error);
		return res.status(500).json(error);
	}
};

//UPDATE-ONE.
exports.updateOne = async (req, res, next) => {
	try {
		const USER_MODEL = {
			password: req.body.password
		}
	
		try {
			const u = await User.update( USER_MODEL , { where: { id: req.params.id } });
			console.log("OK updateOne User: ", u );
			return res.status(200).json(u);
		} catch (error) {
			console.log('ERROR in updateOne ' + "User:", error);
			return res.status(500).json(error);
		}
	} catch (error) {
		return res.status(400).json("Bad Request");
	}
};

//DELETE-ONE
exports.deleteOne = async (req, res, next) => {
	try {
		const u = await User.destroy({ where: { id: req.params.id } });
		console.log("OK deleteOne User: ", );
		return res.status(200).json(u);
	} catch (error) {
		console.log('ERROR in deleteOne ' + "User:", error);
		return res.status(500).json(error);
	}
};