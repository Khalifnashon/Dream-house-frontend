import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-{1640px] mx-auto'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Your <span className='text-orange-500'>Dream</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-500'>House</span> Delivered</h1>
            </div>
            <img 
                className='w-full max-h-[500px] object-cover'
                // src="https://images.unsplash.com/photo-1501876725168-00c445821c9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60z"
                // src="https://media.istockphoto.com/id/1402159266/photo/empty-three-poster-frames-on-beige-wall-in-living-room-interior-with-modern-furniture-and.jpg?b=1&s=170667a&w=0&k=20&c=DixCxqLYIRZvlPrj56ZO7n2gfDJJh8UJhgn-RcCclCE="
                src = "https://images.pexels.com/photos/7747175/pexels-photo-7747175.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt='/'
            />
        </div>
    </div>
  )
}

export default Hero