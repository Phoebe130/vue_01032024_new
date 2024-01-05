<script>
import MyButton from '@/components/customButton/MyButton.vue';
// import { toHandlers } from 'vue';
export default {
    components: {
        MyButton,
    },
    // 放置所有變數的位置
    data() {
        return {
            numA: 0,
            numB: 0,
            result: 0,
            html: `
            <div>
                我是html
            </div>
            `
            , displayValue: "0",
            buttons: [
                { label: "7", value: 7 },
                { label: "8", value: 8 },
                { label: "9", value: 9 },
                { label: "4", value: 4 },
                { label: "5", value: 5 },
                { label: "6", value: 6 },
                { label: "1", value: 1 },
                { label: "2", value: 2 },
                { label: "3", value: 3 },
                { label: "0", value: 0 },
                { label: "+", value: "+" },
                { label: "-", value: "-" },
                { label: "*", value: "*" },
                { label: "/", value: "/" },
                { label: "=", value: "=" },
                { label: "C", value: "C" },
            ],
        }
    },
    // 放置所有function的位置
    methods: {
        add() {
            // 先判斷numA numB不為空
            if (this.numA.toString().trim === '' || this.numB.toString().trim === '') return;
            this.result = this.numA + this.numB;
        },

        handleButtonClick(button) {
            if (button.value === "C") {
                this.displayValue = "0";
            } else if (button.value === "=") {
                try {
                    this.displayValue = eval(this.displayValue).toString();
                } catch (error) {
                    this.displayValue = "Error";
                }
            } else {
                this.displayValue =
                    this.displayValue === "0" ? button.label : this.displayValue + button.label;
            }
        },
    },
}
</script>

<template>
    <!-- v-if  -->
    <!-- v-else-if  -->
    <!-- v-else -->

    <!-- v-show -->

    <!-- v-for 記得要補key  -->
    <!-- v-bind 省略的寫法「：」 -->
    <!-- v-model 資料input與變數產生連結 -->
    <!-- v-on  省略的寫法「＠」後面連接觸發的事件名稱 -->
    <!-- v-html 最常用於所見即所得編輯器 -->
    <div class="calc">
        計算機
        <div v-html="html"></div>
    </div>
    <div>
        <label>
            數字A:
            <input type="number" v-model="numA" class="inputStyle">
        </label>
        <label>
            數字B:
            <input type="number" v-model="numB" class="inputStyle">
        </label>
    </div>



    <div class="btns">
        <MyButton @click="add()">
            <template #placeA>+</template>
            <template #placeB>我是另一個slot開孔</template>
        </MyButton>
        <MyButton @click="add()">-</MyButton>
        <MyButton @click="add()">x</MyButton>
        <MyButton @click="add()">/</MyButton>
        <!-- <button class="btn" type="button" @click="add()">+</button> 
        <button class="btn">-</button>
        <button class="btn">x</button>
        <button class="btn">/</button> -->
    </div>

    <div class="output" text-main-deep>
        輸出結果：{{ result }}
    </div>

    <!-- 計算機 -->
    <div class="calculator">
        <div class="display">
            <input type="text" v-model="displayValue" disabled />
        </div>
        <div class="buttons">
            <button v-for="button in buttons" :key="button.value" @click="handleButtonClick(button)">
                {{ button.label }}
            </button>
        </div>
    </div>


    <div class="box"> </div>
</template>

<!-- 目的是不要影響到其他區塊 -->
<style lang="scss" scoped>
.calculator {
    max-width: 300px;
    margin: auto;
    font-family: Arial, sans-serif;
}

.display {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: right;
    font-size: 1.5em;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}


.calc {
    //font-size: 42px;
}

.inputStyle {
    @apply border border-gray-500 border-[1px];
}

.btns {
    @apply flex gap-[30px] m-[20px];

    justify-content: center;

    .btn {
        @apply border border-[2px] hover:text-[white] bg-main-deep;
        padding: 5px 15px;
    }
}

.box {
    @apply flex justify-center w-[300px] h-[300px] bg-[pink] sm:w-[100px] sm:h-[100px];

}
</style>