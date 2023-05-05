const express = require('express');
const Project = require('../models/project');
const router = express.Router();

//ajout 
router.post('/ajout', (req, res) => {
    let data = req.body;
    let dep = new Project(data);
    dep.save()
        .then(
            (savedProject) => {
                console.log(savedProject);
                res.send(savedProject)
            })
        .catch(
            (error) => {
                console.log(error);
                res.send(error);
            }
        )
});
//get 
router.get('/all', (req, res) => {
    Project.find()
        .then(
            (allProject) => {
                res.send(allProject)
            }
        )
        .catch(
            (error) => {
                res.send(error)
            }
        )
}
)
//get  by id
router.get('/getbyid/:id', (req, res) => {
    let myid = req.params.id;
    Project.findOne({ _id: myid })
        .then(
            (DProject) => {
                res.send(Project)
            }
        )
        .catch(
            (error) => {
                res.send(error);
            }
        )
}
)
//update
router.put('/update/:id', (req, res) => {
    let id = req.params.id;
    let newData = req.body;
    Project.findOneAndUpdate(
        { _id: id },
        newData
    )
        .then(
            (updatedProject) => {
                res.send(updatedProject)
            }
        )
        .catch(
            (err) => {
                res.send(err)
            })
});
//delete 
router.delete('/supprimer/:id', (req, res) => {
    let id = req.params.id;
    Project.findByIdAndDelete({ _id: id })
        .then(
            (deletedProject) => {
                res.send(deletedProject);
            }
        )
        .catch((err) => {
            res.send(err);
        })
});


module.exports = router;