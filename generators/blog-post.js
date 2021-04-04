module.exports = function (plop){
    plop.setGenerator("create post", {
        description: "Create a new blog post file.",
        prompts: [
            {
                type: 'input',
                name: 'title',
                message: 'Title of the blog post: ',
                validate: (title) => (/.+/.test(title) ? true : `Value is required`)
            }
        ],
        actions: (data) => {
            data.date = new Date().toISOString().split('T')[0];
            return [{
                type: 'add',
                path: '../content/{{dashCase title}}/index.md',
                templateFile: 'templates/post-template.md'
            }]
        }
    })
}