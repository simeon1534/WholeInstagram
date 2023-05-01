import {Request, Response} from "express";
import {PhotoModel} from "../models/PhotoModel";
import {PhotoUploadData} from "../types/PhotoUploadData";
import {UserDataInput} from "../types/UserDataInput";
import {UserModel} from "../models/UserModel";


export const uploadPhoto = async (req: Request, res: Response) => {

    let photoUploadData: PhotoUploadData = req.body;



    if (!photoUploadData.photo_description) {
        return res.send({
            status: 400,
            message: "Photo Description has not been provided"
        })
    }
    if (!photoUploadData.photo_base64) {
        return res.send({
            status: 400,
            message: "photo base64 encoding has not been provided"
        })
    }

    const photoModel = new PhotoModel();
    await photoModel.uploadPhoto(photoUploadData)
    res.send({
        status: 201,
        message: "Photo uploaded successfully!"
    })
}