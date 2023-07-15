import { useState } from "react";
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Image from "next/image"

/* PostCard component */
const PostCard = ({ PostData }) =>{
    const [isOpen, setIsOpen] = useState(false)
    const Mordal = () => {
        setIsOpen((prevState) => !prevState)
    };
    const Window = (event) => {
        event.stopPropagation();
    };

    return(
        <>
        {!PostData.visible && 
        <>
        <div className={utilStyles.thumbnail_container} onClick={Mordal}>
            {isOpen && 
                <>
                    <label className={utilStyles.opendfilter} />
                    <div className={utilStyles.workdetailarea}>
                        <div className={utilStyles.workdetailarea_container}>
                            <div className={utilStyles.workdetail_container} onClick={Window}>
                                <div className={utilStyles.workdetail}>
                                    <h2 className={utilStyles.worktitle}>{PostData.title}</h2>
                                    {PostData.description &&
                                    <p className={utilStyles.workdescription}>{PostData.description}</p>
                                    }
                                    {PostData.downdloadlink &&
                                    <div className={utilStyles.workdownload}>
                                    <Link href={PostData.downdloadlink} className={utilStyles.workdownloadlink}>   
                                        File
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>
                                    </Link>
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </> 
            }
            <div className={utilStyles.overlay}>
                <h2 className={utilStyles.title}>{PostData.title}</h2>
            </div>
            <Image className={utilStyles.thumbnail} src={PostData.maincontent.url}  fill/>  
        </div>
        </> 
        }
        </>
    );
};

export default PostCard;