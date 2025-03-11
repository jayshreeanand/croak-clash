import axios from "axios";

export const CREATOR_KEY = process.env.NEXT_PUBLIC_CREATOR_KEY;


export const creatorUpload = async (fileName: string, data: any) => {
	console.log("creatorUpload", fileName, data);
	const res = await axios({
		method: "POST",
		url: "https://api.creatorvideoapi.com/upload",
		headers: {
			"x-tva-sa-id": process.env.NEXT_PUBLIC_CREATOR_KEY,
			"x-tva-sa-secret": process.env.NEXT_PUBLIC_CREATOR_SECRET,
		},
	});

	const url = res.data.body.uploads[0].presigned_url;

	const uploadRes = await axios({
		method: "PUT",
		url,
		headers: {
			"Content-Type": "application/octet-stream",
		},
		data,
	});

	console.log("uploadRes", uploadRes);
	return { url, uploadRes };
};
