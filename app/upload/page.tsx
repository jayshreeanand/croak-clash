import BasicCard from '@/components/basic-card'
import CreatorForm from '@/components/creator-upload-form'
import { siteConfig } from '@/util/site-config'

const Upload = () => {
    return (
        // container classes centered
        <div className="flex flex-row justify-center mt-8">
            {/* make min width 400 */}
            <BasicCard
                className="w-[600px] p-4"
                title="Create new Post"
                description="Create a new Post. This will be published and available to other users."
            >
                <CreatorForm />
            </BasicCard>

            <div>
               
            </div>
        </div>
    )
}

export default Upload
