const postsContent = [{
        title: `This is title 1`,
        body: `This is body1`
    },
    {
        title: `This is title 2`,
        body: `This is body2`
    },
    {
        title: `This is title 3`,
        body: `This is body3`
    },
    {
        title: `This is title 4`,
        body: `This is body4`
    },
    {
        title: `This is title 5`,
        body: `This is body5`
    },
    {
        title: `This is title 6`,
        body: `This is body6`
    },
    {
        title: `This is title 7`,
        body: `This is body7`
    },
    {
        title: `This is title 8`,
        body: `This is body8`
    }
];

let postsElement = document.querySelector('.posts');
let loadAllData = () => {
    postsContent.map((post) => {
        let postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
        <h4 class="post-title">${post.title}</h4>
        <p class="post-body">${post.body}</p>`;
        postsElement.appendChild(postElement);
    })
}
loadAllData();