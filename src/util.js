import axios from "axios";

export async function createUser(data, setState, setLoading) {
  try {
    setLoading(true);
    const res = await axios.post("/api/prisma/create", { data });
    if (res.status === 200) {
      setState({
        error: false,
        msg: res.data.msg
      });
    }
  } catch (err) {
    console.log(err);
    setState({
      error: true,
      msg: "Error"
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
  } catch (err) {
    console.log(err);
    setState({
      error: true,
      msg: "Error"
    });
  } finally {
    setLoading(false);
  }
}

export async function updateUser(data, setState, setLoading) {
  try {
    setLoading(true);
    const res = await axios.post("/api/prisma/update", { data });
    if (res.status === 200) {
      setState({
        error: false,
        msg: res.data.msg
      });
    }
  } catch (err) {
    console.log(err);
    setState({
      error: true,
      msg: "Error"
    });
  } finally {
    setLoading(false);
  }
}

export async function deleteUser(data, setState, setLoading) {
  try {
    setLoading(true);
    const res = await axios.post("/api/prisma/delete", { id: data });
    if (res.status === 200) {
      setState({
        error: false,
        msg: res.data.msg
      });
    }
  } catch (err) {
    console.log(err);
    setState({
      error: true,
      msg: "Error"
    });
  } finally {
    setLoading(false);
  }
}