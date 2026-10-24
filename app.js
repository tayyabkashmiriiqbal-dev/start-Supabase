// zM3-EzP$M#@PzgQ
// let ul=document.querySelector("#addtodoo")
// let input=document.querySelector("#input")
// const supabaseclient=supabase.createClient(
//     "https://nperihxywfwgbdegzosi.supabase.co",
//     "sb_publishable_HY5UB4mZZU177jY4YCNnLg_VQR18SOm",
// );
// let getdata=async()=>{
//     const response=await
//     supabaseclient.from("todos").select("*")
//     const todos=response.data;
// for(let i=0;i<todos.length;i++){
//     ul.innerHTML+=<li>${todos[i].title}</li>
// }
// }
// getdata()
// const addTodo = async (event) => {
//   event.preventDefault();

//   const todo = input.value;

//   await supabaseClient.from("todos").insert({ todo });

//   getData();
// };

// const deleteTodo = async (id) => {
//   const response = await supabaseClient.from("todos").delete().eq("id", id);

//   if (!response.error) {
//     getData();
//   }
// -----------------------------------------------------
const supabaseurl="https://nperihxywfwgbdegzosi.supabase.co"
const supabasekey="sb_publishable_HY5UB4mZZU177jY4YCNnLg_VQR18SOm"
const supabaseClient=supabase.createClient(supabaseurl,supabasekey);
const input_form=document.querySelector("#input_form")
const input=document.querySelector("#input");
const ul=document.querySelector("#addtodo");
const getdata=async()=>{
ul.innerHTML="";
const response=await  supabase.Client.form("todo list").select("*");
let todos=response.data;
for(let i =0;i<todos.length;i++){
    ul.innerHTML+=`<li>${todos[i].todo}<button onclick "deletetodo($todos[i].id)">Remove</button></li>`
}

}
getdata()
function addTodo = async(event)=>{
event.preventDefault();
const todos=input.value;
await supabaseClient.form("todo list").insert("*")
todos.innerHTML
}