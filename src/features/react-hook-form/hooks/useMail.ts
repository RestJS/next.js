import { useEffect, useState } from "react";

export default function useMail(data: FormData | undefined) {

    // Variables declaration
    const [isPending, setIsPending] = useState(false);

    // Mail Submit handler
    useEffect(() => {
        if (data) {
            setIsPending(true);
            fetch("/mail.php", {
                headers: { 'Content-Type': 'application/json' },
                method: "post",
                body: JSON.stringify(data)
            })
                .then(async (response) => {
                    console.log(await response.json());
                    setIsPending(false);
                })
                .catch((error) => console.log(error))
        }
    }, [data]);

    return isPending;
}