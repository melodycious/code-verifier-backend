import { Get, Query, Route, Tags } from "tsoa";
import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import { LogSuccess } from "../utils/logger";

@Route("/api/hello")
@Tags("HelloController")


export class HelloController implements IHelloController {

    /**
     * Endpoint to retreive a Message "Hello {name}" in Json
     * @param {string | undefined} name Name of the user to be greeted
     * @returns {BasicResponse} Promise of BasicResponse
     */
    @Get("/")
   
    public async getMessage(@Query()name?: string): Promise<BasicResponse> {
        LogSuccess('[/api/hello] Get Request');

        return {
            message: `Hello, ${name || "annonymous"}`
        }
    }
}
