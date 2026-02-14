import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface PackageSelectionModalProps {
    isOpen: boolean;
    onClose: () => void;
    packageName: string;
}

const PackageSelectionModal = ({
    isOpen,
    onClose,
    packageName,
}: PackageSelectionModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-2xl p-0 overflow-hidden border-none bg-transparent">
                <div className="relative w-full aspect-video flex items-center justify-center">
                    {/* Background Image with Overlay */}
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0 rounded-2xl"
                        style={{
                            backgroundImage: 'url("/package-popup-bg.jpg")',
                            backgroundColor: '#1a1a1a' // Fallback color
                        }}
                    >
                        {/* Much lighter overlay (20% opacity) for maximum image visibility */}
                        <div className="absolute inset-0 bg-black/20 z-0 rounded-2xl" />
                    </div>

                    {/* Content Container - Balanced Padding */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 sm:px-12 py-10 w-full h-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col items-center justify-center max-w-xl"
                        >
                            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/20 text-gold-500 backdrop-blur-sm border border-gold-500/30">
                                <i className="fas fa-check-circle text-3xl shadow-gold" />
                            </div>

                            <DialogHeader className="space-y-2">
                                <DialogTitle className="text-3xl sm:text-4xl font-extrabold !text-white text-center leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                    Excellent <span className="!text-gold-500">Choice!</span>
                                </DialogTitle>
                                <DialogDescription className="text-lg sm:text-xl !text-white text-center font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                    You have selected the <span className="!text-gold-500 font-black uppercase tracking-wider">{packageName}</span>.
                                </DialogDescription>
                            </DialogHeader>

                            <div className="mt-6 flex flex-col items-center">
                                <p className="text-white text-sm sm:text-base mb-6 max-w-md mx-auto leading-relaxed font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                                    Please complete the form below to contact our team.
                                </p>
                                <Button
                                    onClick={onClose}
                                    className="bg-gold-500 hover:bg-gold-600 !text-black font-bold px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-gold hover:scale-105 active:scale-95 border border-black/10"
                                >
                                    Continue to Form
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PackageSelectionModal;
