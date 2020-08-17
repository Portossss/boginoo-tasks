const functions = require('firebase-functions');
const admin = require('firebase-admin')

admin.initializeApp();

// exports.helloWorld = functions.https.onRequest(async (request, response) => {
//     // let res = await admin.firestore().collection('tests').doc('portos').get().then((doc) => doc.data());
//     // response.send(`Hello ${res.name}`)
//     admin.firestore().document('tests/portos').onCreate((snap, context) => {
//         const data = snap.data();
//         const name = 'Erkhembayar' + data.name;
//         admin.firestore().collection('users').doc('fullname').set({
//             full_name: name 
//         })
//     });
// });
exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
    const email = user.email;
  });
