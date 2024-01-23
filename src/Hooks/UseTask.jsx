// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useTask = () => {

    const { user } = useContext(AuthContext);
    const email = user.email;
    const axiosPublic = useAxiosPublic();
   
    const {data: task = [], isPending: loading, refetch} = useQuery({
        queryKey: ['tasks'], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/tasks/${email}`);
            return res.data;
        }
    })


    return [task, loading, refetch]
}

export default useTask;