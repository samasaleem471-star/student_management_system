// SUPABASE
let supabaseUrl = "https://crbeekfpkgentygvmpan.supabase.co";
let supabaseKey = "sb_publishable_UnIX2XJfbSOHPYqgTIq_Ew_7CCBRPpC";

const { createClient } = supabase;
const client = createClient(supabaseUrl, supabaseKey);
console.log(client);

const form = document.querySelector("#student_registration")
form.addEventListener("submit", (event)=>{
    event.preventDefault()
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    
    const inputs = document.querySelectorAll("input")
    
})