"use client";

import { useForm, zodResolver } from "@mantine/form";

import {
    Button,
    Container,
    Input,
    InputWrapperProps,
    Select,
    Stack,
    Textarea,
    TextInput,
} from "@mantine/core";

import { notifications } from "@mantine/notifications";

import { Link, RichTextEditor } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { sendEmail } from "@/lib/sendEmail";

import {
    contactFormSchema,
    contactFormType,
    services,
} from "@/zod-schemas/contactSchema";
import { useState } from "react";

export function ContactForm() {
    const initialValues: contactFormType = {
        subject: "",
        name: "",
        email: "",
        address: "",
        description: "",
        service: "",
    };

    const form = useForm<contactFormType>({
        validateInputOnBlur: true,
        mode: "uncontrolled",
        initialValues: initialValues,
        validate: zodResolver(contactFormSchema),
    });

    const [isSending, setIsSending] = useState(false);

    async function handleSubmit(formData: contactFormType) {
        setIsSending(true);
        try {
            const { data, error } = await sendEmail(formData);
            if (error) {
                notifications.show({
                    title: error.name,
                    message: error.message,
                });
            } else if (data && !error) {
                notifications.show({
                    title: "Success",
                    message: "Email sent successfully🌟",
                });
                form.reset();
            }
        } catch (e) {
            console.error("Failed to send email:", e);
        } finally {
            setIsSending(false);
        }
    }

    return (
        <Container size={"xl"} m={"xs"}>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack
                    p={"md"}
                    style={{
                        border: "1px solid",
                        borderRadius: "2%",
                        height: "100%",
                    }}
                >
                    <TextInput
                        withAsterisk
                        label="Subject"
                        placeholder="Subject of the Email"
                        key={form.key("subject")}
                        {...form.getInputProps("subject")}
                    />

                    <TextInput
                        withAsterisk
                        label="Name"
                        placeholder="Your Full Name"
                        key={form.key("name")}
                        {...form.getInputProps("name")}
                    />

                    <TextInput
                        withAsterisk
                        label="Email"
                        placeholder="Your Email Address"
                        key={form.key("email")}
                        {...form.getInputProps("email")}
                        type="email"
                    />

                    <Textarea
                        label="Address"
                        placeholder="Your Home Address"
                        key={form.key("address")}
                        {...form.getInputProps("address")}
                    />

                    <Select
                        label="Select the Service you need"
                        placeholder="Select"
                        data={services()}
                        clearable
                        key={form.key("service")}
                        {...form.getInputProps("service")}
                    />

                    <ContactRichTextEditor
                        key={form.key("description")}
                        value={form.values.description}
                        error={form.getInputProps("description").error}
                        {...form.getInputProps("description")}
                    />

                    <Button type="submit" disabled={isSending}>
                        {isSending ? "Sending..." : "Send Email"}
                    </Button>
                </Stack>
            </form>
        </Container>
    );
}

interface ContactRichTextEditorProps
    extends Omit<InputWrapperProps, "onChange"> {
    value: string;
    onChange?(value: string): void;
}

function ContactRichTextEditor({
    value,
    onChange,
    ...props
}: ContactRichTextEditorProps) {
    const editor = useEditor({
        extensions: [StarterKit, Link],
        content: value,
        immediatelyRender: false,
        onUpdate: ({ editor }) => onChange?.(editor.getHTML()),
    });

    return (
        <Input.Wrapper {...props}>
            <RichTextEditor
                editor={editor}
                mah={500}
                h={300}
                style={
                    props.error
                        ? { borderColor: "red" }
                        : { overflowY: "scroll" }
                }
            >
                <RichTextEditor.Toolbar sticky>
                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.BulletList />
                        <RichTextEditor.OrderedList />
                        <RichTextEditor.Hr />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Bold />
                        <RichTextEditor.Italic />
                        <RichTextEditor.Strikethrough />
                        <RichTextEditor.ClearFormatting />
                        <RichTextEditor.Blockquote />
                        <RichTextEditor.Code />
                        <RichTextEditor.CodeBlock />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.H1 />
                        <RichTextEditor.H2 />
                        <RichTextEditor.H3 />
                        <RichTextEditor.H4 />
                        <RichTextEditor.H5 />
                        <RichTextEditor.H6 />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Undo />
                        <RichTextEditor.Redo />
                    </RichTextEditor.ControlsGroup>
                </RichTextEditor.Toolbar>

                <RichTextEditor.Content />
            </RichTextEditor>
        </Input.Wrapper>
    );
}
