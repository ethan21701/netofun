'use client';

import Container from '@/components/shared/Container';

export default function VideoSection() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/8eJZoUERAyM?rel=0"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="NetoFun Video"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
