
        // document.getElementById('addToContactsButton').addEventListener('click', function() {
        //     const contactData = {
        //         name: 'John Doe',
        //         phone: '+1234567890',
        //         email: 'johndoe@example.com',
        //     };

        //     // Check if the Contacts API is available
        //     if ('contacts' in navigator) {
        //         navigator.contacts.select(['name', 'email', 'tel'], { multiple: true })
        //             .then(contacts => {
        //                 const newContact = new Contact({
        //                     name: [contactData.name],
        //                     email: [contactData.email],
        //                     tel: [contactData.phone],
        //                 });

        //                 const saveOptions = {
        //                     contacts: [newContact],
        //                 };

        //                 return navigator.contacts.save(saveOptions);
        //             })
        //             .then(() => {
        //                 alert('Contact added successfully.');
        //             })
        //             .catch(error => {
        //                 console.error('Error adding contact:', error);
        //                 alert('Error adding contact. Please try again later.');
        //             });
        //     } else {
        //         alert('Your browser does not support the Contacts API.');
        //     }
        // });

        document.getElementById('addPhoneNumberButton').addEventListener('click', function() {
            const phoneNumber = '+1234567890';

            // Check if the Contacts API is available
            if ('contacts' in navigator) {
                navigator.contacts.select(['tel'], { multiple: true })
                    .then(contacts => {
                        const newContact = new Contact({
                            tel: [phoneNumber],
                        });

                        const saveOptions = {
                            contacts: [newContact],
                        };

                        return navigator.contacts.save(saveOptions);
                    })
                    .then(() => {
                        alert('Phone number added to contacts successfully.');
                    })
                    .catch(error => {
                        console.error('Error adding phone number to contacts:', error);
                        alert('Error adding phone number to contacts. Please try again later.');
                    });
            } else {
                alert('Your browser does not support the Contacts API.');
            }
        });
