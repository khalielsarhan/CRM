import {addNewContact, getContact, getContactwithID, updateContact, deleteContact} from '../controlers/crmControler';




const routes = (app) => {
    app.route('/contact')
        .get ((req,res,next) => {

            //middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        },getContact)
        


        //Post endpoint
        .post(addNewContact);


    app.route('/contact/:contactID')

        //get a spicific contact
        .get(getContactwithID)

        //updating a sepicific contact 
        .put(updateContact)

        //deleting a spicific contact 
        .delete(deleteContact);
}

export default routes