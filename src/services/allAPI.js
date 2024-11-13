import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

export const saveBlogAPI = async (blogDetails) => { 
    return await commonAPI("POST", `${SERVERURL}/posts`, blogDetails); 
};

export const getAllBlogsAPI = async () => { 
    return await commonAPI("GET", `${SERVERURL}/posts`,""); 
};

export const deleteBlogAPI = async (id) => { 
    return await commonAPI("DELETE", `${SERVERURL}/posts/${id}`,{}); 
};

export const getBlogByIdAPI = async (id) => {
    return await commonAPI("GET", `${SERVERURL}/posts/${id}`,""); 
};

export const saveEditBlogAPI = async (id, blogDetails) => {
    return await commonAPI("PUT", `${SERVERURL}/posts/${id}`, blogDetails);
};


