import { connectDB } from "../../../lib/mongodb";
import Provider from "../../../models/Provider";

export async function GET(){

    await connectDB();

    const providers=
    await Provider.find();

    return Response.json(
        providers
    );
}