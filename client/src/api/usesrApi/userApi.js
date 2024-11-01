import http from "@/lib/axiosIntercepter";

export const fetchAllUsers = async ({ queryKey }) => {
  const [, page, limit] = queryKey; //
  const response = await http.get("/admin/all-users", {
    params: { page, limit },
  });
  return response.data.data;
};


export const blockOrUnblockUser =  async (userId) => {
  const response = await http.patch(`/admin/user/${userId}`);
  return response.data;
}