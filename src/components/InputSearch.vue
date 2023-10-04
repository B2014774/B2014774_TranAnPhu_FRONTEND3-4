<script>
    export default {
        //props Nhận và truyền dữ liệu cho modelValue (kiểu string)
        //liên kết input với modelValue
        props: {
            modelValue: { type: String, default: ""},
        },
        emits: ["submit", "update:modelValue"],
        methods: {
            updateModelValue(e) {
                this.$emit("update:modelValue", e.target.value); //custom emit update:modelValue
                                            //e.target = input text row 21, value = modelValue
            },
            submit(){
                this.$emit("submit"); //custom emit submit
            },
        },
};
</script>

<template>
    <div class="input-group">
        <input 
            type="text"
            class="form-control"
            placeholder="Nhập thông tin cần tìm"
            :value="modelValue" 
            @input="updateModelValue"
            @keyup.enter="submit"
        />
        <!-- modelValue Nhận dữ liệu từ prop -->
        <!-- updateModelValue tự emit sự kiện khi dữ liệu input thay đổi -->
        <div class="input-group-append">
            <button
                class="btn btn-outline-secondary"
                type="button"
                @click="submit"
            >
                <i class="fas fa-search"></i>Tìm kiếm
            </button>
        </div>
    </div>
</template>