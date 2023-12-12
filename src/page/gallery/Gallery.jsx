import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroll-component';




const getimages = async ({ pageParam = 0 }) => {
    try {
      const res = await fetch(`https://finalproject-server.vercel.app/gallery?limit=10&offset=${pageParam}`);
      const data = await res.json();
  
      return { ...data, prevOffset: pageParam };
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  
  const Gallery = () => {
    const {data,fetchNextPage,hasNextPage,} = useInfiniteQuery({
      queryKey: ['images'],
      queryFn: getimages,
      getNextPageParam: (lastPage) => {
        if (lastPage.prevOffset + 10 > lastPage.imagesCount) {
          return false;
        }
        return lastPage.prevOffset + 10;
      },
    });
  
    
  
    const images = data?.pages?.reduce((acc, page) => {
      if (Array.isArray(page.images)) {
    
        const pageImages = page.images.map(item => item);
  
        return [...acc, ...pageImages];
      }
      return acc;
    }, []);
    console.log('Data', data);
    console.log('Images', images);
   
  
  
  
    return (
      <div className='py-28'>
        <InfiniteScroll
          dataLength={images ? images.length : 0}
          next={() => fetchNextPage()}
          hasMore={hasNextPage}
          loader={<progress className="progress w-full"></progress>}
        >
          <div className="w-10/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10">
            {images &&
              images.map((item, idx) => {
                return (
                  <div className="border-2 p-2 bg-slate-200 rounded" key={idx}>
                    <img
                      src={item}
                      alt={`Gallery Image ${idx + 1}`}
                      className="w-full h-auto rounded"
                    />
                  </div>
                );
              })}
          </div>
        </InfiniteScroll>
      </div>
    );
  };
  
  export default Gallery;
  
