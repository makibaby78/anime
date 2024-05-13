import Menu from "@/components/Menu";

export default function Footer() {

    return (
        <div className="py-5 p-4">
            <div className="container mx-auto max-w-screen-lg">
                <div className="flex justify-between border-t border-dashed border-text pt-5 text-sm">
                    <Menu class="flex gap-x-4 text-sm text-white" />
                    <span className="text-white">Copyright © 2024 Max Loued Baisac - All Rights Reserved</span>
                </div>
            </div>
        </div>
    );
}