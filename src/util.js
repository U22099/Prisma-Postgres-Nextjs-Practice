import axios from "axios";

export async function createUser(data, setState, setLoading) {
  try {
    setLoading(true);
    console.log(data)
    const res = await axios.post("/api/prisma/create", { data });
    console.log(res)
    if (res.status === 200) {
      setState({
        error: false,
        msg: res.data.msg
      });
    }
  } catch (err) {
    console.log(err);
    setState({
      error: false,
      msg: res.data.msg
    });
  } finally {
    setLoading(false);
  }
}

export async function readUsers(setState, setLoading) {
  try {
    setLoading(true);
    const res = await axios.get("/api/prisma/read");
    const data = res.data;
    if (res.status === 200) {
      setState({
        error: false,
        msg: "Success",
        data: data.users || []
      });
    }
    console.log(data);
  } catch (err) {
    console.log(err);
    setState({
      error: false,
      msg: res.data.msg
    });
  } finally {
    setLoading(false);
  }
}

export async function updateUser(data) {
  try {
    const res = await axios.post("/api/prisma/update", { data });
    const data = res.data;
    console.log(data);
  } catch (err) {
    console.log(err)
  }
}

export async function deleteUser(id) {
  try {
    const res = await axios.post("/api/prisma/delete", { id });
    const data = res.data;
    console.log(data);
    return data;
  } catch (err) {
    console.log(err.message)
  }
}