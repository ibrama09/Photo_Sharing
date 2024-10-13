import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const UserDetail = () => {
  const [loading, setLoading] = useState();

  const { id } = useParams();

  useEffect(() => {
  }, [id]);

  if (loading) {
    return <div>Loading data dalam proses...</div>;
  }

  return (
    <div>
      <Link to={"/"}>Home</Link>
      <h1>ini halaman user</h1>
    </div>
  );
};

export default UserDetail;
