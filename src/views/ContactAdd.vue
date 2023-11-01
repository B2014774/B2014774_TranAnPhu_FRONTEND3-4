<template>
    <div class="page"><h4>Tạo liên hệ</h4>
        <ContactForm :contact="contact" @submit:contact="createContact"/>
        {{ message }}
    </div>
</template>
<script>
import ContactForm from '../components/ContactForm.vue';
import contactService from '../services/contact.service';
import ContactService from '../services/contact.service';

export default {
    components: {
        ContactForm
    },
    data() {
        return {
            contact: {},
            message: ""
        };
    },
    methods: {

        async createContact(contact){
            try{
                // console.log(contact);
                await contactService.create(contact);
                this.message = "Liên hệ đã tạo thành công.";
            } catch (error) {
                console.log(error);
            }
        }
    },


};
</script>
<style></style>