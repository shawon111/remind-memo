import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <Card className="w-full max-w-lg p-8 shadow-xl bg-white">
                <CardContent className="text-center">
                    <h1 className="text-4xl font-bold mb-4">
                        404 - Page Not Found
                    </h1>
                    <p className="mb-6">
                        Oops! The page you are looking for does not exist.
                    </p>
                    <Button>
                        <Link href="/">Go Home</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default NotFound;
