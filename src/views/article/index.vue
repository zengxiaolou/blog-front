<!--
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/15-14:35
INTRODUCTION    文件简介
-->

<template>
    <el-tabs v-model="activeName" v-infinite-scroll="load" @tab-click="handleClick" type="border-card">
        <el-tab-pane v-for="(value, index) in group" :key=index :label=value.label :name=value.name>
            <ul class="infinite-list"  >
                <li v-for="i in count" class="infinite-list-item">
                    <my-article-preview></my-article-preview>
                </li>
            </ul>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    import myArticlePreview from "../../components/article/article_preview"
    export default {
        name: "index",
        components: {myArticlePreview},
        data() {
            return {
                activeName: 'python',
                group: [
                    {"label": "Python", "name": "python", "title": "python文章"},
                    {"label": "Golang", "name": "golang", "title": "golang文章"},
                    {"label": "Linux", "name": "linux", "title": "linux文章"},
                    {"label": "Vue", "name": "Vue", "title": "Vue文章"},
                    {"label": "Tools", "name": "Tools", "title": "Tools文章"},
                    {"label": "DB", "name": "DB", "title": "BD文章"},
                    {"label": "Docker", "name": "Docker", "title": "Docker文章"},
                    {"label": "Others", "name": "Others", "title": "Others文章"},
                ],
                count: 0,
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            load () {
                this.count += 1
            }
        }
    }
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;

        .el-tabs {
            /deep/ .el-tabs__header {
                margin-bottom: 0;
                height: 45px;
            }
            .el-tab-pane{
                height: 1000px;

            }
        }
    }
</style>
