import mongoose from 'mongoose';
import {ContactSchema } from '../models/crmModel';


const Contact = mongoose.model('Contact',ContactSchema);

export const addNewContact = (req, res) =>{
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if (err){
            res.send(err);

        }
        res.json(contact);
    });
}

export const getContact = (req, res) =>{
   Contact.find({}, (err,contact)=>{

        if (err){
            res.send(err);

        }
        res.json(contact);
    });
}

export const getContactwithID = (req, res) =>{
    Contact.findById(req.params.contactID, (err,contact)=>{
 
         if (err){
             res.send(err);
 
         }
         res.json(contact);
     });
 }

 export const updateContact = (req, res) =>{
    Contact.findByOneAndUpdate({_id:req.params.ContactID}, req.body, {new: true, useFindAndModify: false}, (err,contact)=>{
 
         if (err){
             res.send(err);
 
         }
         res.json(contact);
     });
 }

 export const deleteContact = (req, res) =>{
    Contact.remove({_id:req.params.ContactID}, (err,contact)=>{
 
         if (err){
             res.send(err);
 
         }
         res.json({message:'successfuly deleted contact'});
     });
 }