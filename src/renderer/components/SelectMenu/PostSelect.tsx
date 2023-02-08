import React from "react";
import {SelectMenuLayout} from "./Layout";
import {getStations} from "../api/api";
import {Spinner} from "flowbite-react/lib/esm/components/Spinner";
import {PostCard} from "./PostCard";
import {useTranslation} from "react-i18next";
import { Station } from "@simrail/types";
import {useParams} from "react-router-dom";

type Props = {
    isWebpSupported: boolean,
}

export const PostSelect: React.FC<Props> = ({isWebpSupported}) => {
    const [posts, setPosts] = React.useState<Station[] | undefined>();
    const {serverCode} = useParams()
    const {t} = useTranslation();

    React.useEffect(() => {
        if (!serverCode) return;
        getStations(serverCode).then(setPosts);
        // eslint-disable-next-line
    }, []);

    return <SelectMenuLayout title={t("SELECTMENU_post_select")} isWebpSupported={isWebpSupported}>
        {
            !posts
            ? <Spinner size="xl"/>
            : posts.map((post) => <PostCard key={post.Prefix} post={post} isWebpSupported={isWebpSupported}/>)
        }
    </SelectMenuLayout>;
}

export default PostSelect;