import { contactFormType } from "@/zod-schemas/contactSchema";
import * as React from "react";

interface EmailTemplateProps extends contactFormType {}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    description,
}) => <div>{description}</div>;
