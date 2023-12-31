import { response, request } from "express";


const getApi = (req = request, res = response)=>{
    const query = req.query;
   

    res.status(201).json({ msg:"Get Api", query });
};

const postApi = (req = request, res = response)=>{
    const body = req.body;
    
    res.json({ msg:"Post Api", body });
};

const putApi = (req = request, res = response)=>{
    const { id } = req.params;
    
    
    res.json({ msg:"Put Api", id });
};

const patchApi = (req = request, res = response)=>{
    res.json({ msg:"Patch Api" });
};

const deleteApi = (req = request, res = response)=>{
    res.json({ msg:"Delete Api" });
};



export{ getApi, putApi, postApi, deleteApi, patchApi }

