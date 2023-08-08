import './login.scss';
import Input from '@/components/Input';

export default function Page() {
    return (
        <>
            <div className='bg-[url("https://preview.keenthemes.com/metronic8/demo8/assets/media/misc/auth-bg.png")] h-24 bg-no-repeat bg-cover uppercase font-bold flex justify-center items-center text-white'>
                pelatihan
            </div>
            <div>
                <div className="mt-16 mb-8 mx-auto w-16 font-bold">Sign In</div>
                <div className="w-56 mx-auto">
                    <div>
                        <Input type="email" placeholder="email" />
                    </div>
                    <div>
                        <Input type="password" placeholder="Password" />
                    </div>
                    <button>Sign In</button>
                </div>
            </div>
        </>
    );
}
