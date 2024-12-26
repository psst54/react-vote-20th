"use server";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:4000";
// type 합치기(signup)
type FormState = {
  message: string | null;
  formData: {
    id: string;
    password: string;
    email: string;
  } | null;
};
export default async function onSubmit(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  if (!formData.get("id") || !(formData.get("id") as string)?.trim()) {
    return { message: "no_id", formData: null };
  }
  if (
    !formData.get("password") ||
    !(formData.get("password") as string)?.trim()
  ) {
    return { message: "no_password", formData: null };
  }
  if (!formData.get("email") || !(formData.get("email") as string)?.trim()) {
    return { message: "no_email", formData: null };
  }

  let shouldRedirect = false;
  try {
    console.log(BASE_URL);
    const response = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      body: JSON.stringify({
        id: formData.get("id"),
        password: formData.get("password"),
        email: formData.get("email"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 403) {
      return { message: "user_exists", formData: null };
    }

    if (!response.ok) {
      throw new Error("Failed to sign up");
    }

    shouldRedirect = true;

    // 회원가입 성공
    return {
      message: "signup_success",
      formData: {
        id: formData.get("id") as string,
        password: formData.get("password") as string,
        email: formData.get("email") as string,
      },
    };
  } catch (err) {
    console.error("Sign-up Error:", err);
    return { ...prevState, message: "server_error" };
  }
}
