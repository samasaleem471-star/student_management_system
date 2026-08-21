// SUPABASE
let supabaseUrl = "https://crbeekfpkgentygvmpan.supabase.co";
let supabaseKey = "sb_publishable_UnIX2XJfbSOHPYqgTIq_Ew_7CCBRPpC";

const { createClient } = supabase;
const client = createClient(supabaseUrl, supabaseKey);

console.log(client);

const form = document.querySelector("#student_registration");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    const formData = new FormData(form);

    // user data entry border red
    const inputs = document.querySelectorAll("input");

    let check = false;

    inputs.forEach((input) => {
      if (input.value === "") {
        input.style.border = "2px solid red";
        check = true;
      }
    });

    if (check) {
      return;
    }

    const data = Object.fromEntries(formData);
    const {
      email,
      password,
      address,
      cities,
      course,
      dob,
      emailaddress,
      fathersname,
      firstname,
      gender,
      lastname,
    } = data;

    // console.log(data);

    // supabase signup
    const { data: signupData, error } = await client.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.log(error);
      return;
    }

    // console.log(signupData);

    const id = signupData.user.id;
    // console.log("User ID:", id);

    // supabase insertion
    const { error: dbError } = await client.from("student_data").insert({
      user_id: id,
      firstname,
      lastname,
      "father'sname": fathersname,
      address,
      city: cities,
      course,
      dob,
      gender,
    });
    console.log(dbError);

    form.reset();
  } catch (error) {
    console.log(error);
  }
});

// user data entry border blue
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value !== "") {
      input.style.border = "";
    }
  });
});
