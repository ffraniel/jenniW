// //index 
// const Index = (props) => (
//     <div>
//         <h1>hello there</h1>
//         <Posts posts={props.posts} />

//     </div>
// );

// Index.getInitialProps = async function() {
// const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
// const data = await res.json()
// return {
// posts:data
// }    
// }

// //posts
// const Posts = (props) => (
//     <div>
//         {/* <p>{props.result[0].uid}</p> */}
//         {props.posts.map((post)=>{
//             return (
//                 <p>{post.title}</p>
//             )
//         })}
//     </div>
// )


// export default Posts;