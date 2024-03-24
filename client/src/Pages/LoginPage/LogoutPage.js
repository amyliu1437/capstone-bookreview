import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogoutPage() {
  const navigate = useNavigate();

  sessionStorage.removeItem("token");
  sessionStorage.removeItem("name");
  navigate("/");
}

export default LogoutPage;
