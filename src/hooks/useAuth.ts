import { AuthContext } from "@/providers/AuthContext";
import { useContext, useEffect, useState } from "react";

export const useAuth = () => {
    const [isLoading, setIsLoading] = useState(true);
    const context = useContext(AuthContext);

    useEffect(() => {
        setIsLoading(context === undefined);
    }, [context]);

    return {...context, isLoading};
};