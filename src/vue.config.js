module.exports = {
    // for表格导出
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            'vendor': path.resolve(__dirname, '../src/vendor') // 新增这一行
        }
    }
};
