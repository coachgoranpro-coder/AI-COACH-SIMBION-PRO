import { useState } from 'react';
import { Book, FileText, Video, ExternalLink, Search } from 'lucide-react';

interface ResourcesModuleProps {
  language?: 'sr' | 'en';
}

interface Resource {
  id: string;
  title: string;
  author?: string;
  type: 'book' | 'article' | 'video';
  description: string;
  link?: string;
}

const translations = {
  sr: {
    title: 'Resursi',
    books: 'Knjige',
    articles: 'Članci',
    videos: 'Video materijali',
    search: 'Pretraži...',
    author: 'Autor',
    viewResource: 'Pogledaj',
    allResources: 'Svi resursi'
  },
  en: {
    title: 'Resources',
    books: 'Books',
    articles: 'Articles',
    videos: 'Videos',
    search: 'Search...',
    author: 'Author',
    viewResource: 'View',
    allResources: 'All Resources'
  }
};

const resourcesData: Record<string, Resource[]> = {
  sr: [
    {
      id: '1',
      title: 'Osnove fizičke pripreme u košarci',
      author: 'Dr. Miloš Petrović',
      type: 'book',
      description: 'Kompletan vodič kroz principe razvoja fizičkih sposobnosti košarkaša - od mlađih kategorija do profesionalnog nivoa.',
      link: '#'
    },
    {
      id: '2',
      title: 'Periodizacija treninga u kolektivnim sportovima',
      author: 'NSCA',
      type: 'article',
      description: 'Naučni članak o periodizaciji treninga, makro i mikrociklusima, tapering fazama i recovery protokolima.',
      link: '#'
    },
    {
      id: '3',
      title: 'NBA Training Methods - Speed Development',
      author: 'NBA Performance Center',
      type: 'video',
      description: 'Video materijal sa treninzima brzine i agilnosti koje koriste NBA timovi. Demonstracija vežbi i protokola.',
      link: '#'
    },
    {
      id: '4',
      title: 'Eksplozivna snaga - Pliometrija u praksi',
      author: 'Dr. Zoran Pajić',
      type: 'book',
      description: 'Metodika razvoja eksplozivne snage kroz pliometrijske vežbe. Progresije, doziranje i bezbednost.',
      link: '#'
    },
    {
      id: '5',
      title: 'FIBA Protocols - Physical Preparation',
      author: 'FIBA',
      type: 'article',
      description: 'Zvanični FIBA protokoli za fizičku pripremu reprezentacija. Testiranja, normative i preporuke.',
      link: '#'
    },
    {
      id: '6',
      title: 'Mobility & Flexibility for Basketball',
      author: 'Human Kinetics',
      type: 'video',
      description: 'Video serija vežbi mobilnosti i fleksibilnosti specifične za košarkaše. Warm-up i recovery rutine.',
      link: '#'
    },
    {
      id: '7',
      title: 'Snaga i kondicija u košarci',
      author: 'Prof. dr Ivan Marković',
      type: 'book',
      description: 'Udžbenik o razvoju snage i izdržljivosti. Programiranje treninga, vežbe, metode i kontrola opterećenja.',
      link: '#'
    },
    {
      id: '8',
      title: 'Recovery Strategies in Elite Basketball',
      author: 'Sports Science Journal',
      type: 'article',
      description: 'Najnovija istraživanja o oporavku vrhunskih košarkaša - ishrana, san, hidratacija, kriosauna.',
      link: '#'
    }
  ],
  en: [
    {
      id: '1',
      title: 'Fundamentals of Physical Preparation in Basketball',
      author: 'Dr. Miloš Petrović',
      type: 'book',
      description: 'Complete guide through principles of developing physical abilities in basketball players - from youth to professional level.',
      link: '#'
    },
    {
      id: '2',
      title: 'Periodization in Team Sports',
      author: 'NSCA',
      type: 'article',
      description: 'Scientific article on training periodization, macro and microcycles, tapering phases and recovery protocols.',
      link: '#'
    },
    {
      id: '3',
      title: 'NBA Training Methods - Speed Development',
      author: 'NBA Performance Center',
      type: 'video',
      description: 'Video materials with speed and agility training used by NBA teams. Exercise demonstrations and protocols.',
      link: '#'
    },
    {
      id: '4',
      title: 'Explosive Power - Plyometrics in Practice',
      author: 'Dr. Zoran Pajić',
      type: 'book',
      description: 'Methodology of developing explosive power through plyometric exercises. Progressions, dosage and safety.',
      link: '#'
    },
    {
      id: '5',
      title: 'FIBA Protocols - Physical Preparation',
      author: 'FIBA',
      type: 'article',
      description: 'Official FIBA protocols for national team physical preparation. Testing, norms and recommendations.',
      link: '#'
    },
    {
      id: '6',
      title: 'Mobility & Flexibility for Basketball',
      author: 'Human Kinetics',
      type: 'video',
      description: 'Video series of mobility and flexibility exercises specific to basketball. Warm-up and recovery routines.',
      link: '#'
    },
    {
      id: '7',
      title: 'Strength and Conditioning in Basketball',
      author: 'Prof. dr Ivan Marković',
      type: 'book',
      description: 'Textbook on strength and endurance development. Training programming, exercises, methods and load control.',
      link: '#'
    },
    {
      id: '8',
      title: 'Recovery Strategies in Elite Basketball',
      author: 'Sports Science Journal',
      type: 'article',
      description: 'Latest research on recovery in elite basketball players - nutrition, sleep, hydration, cryotherapy.',
      link: '#'
    }
  ]
};

export default function ResourcesModule({ language = 'sr' }: ResourcesModuleProps) {
  const t = translations[language];
  const [filter, setFilter] = useState<'all' | 'book' | 'article' | 'video'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const resources = resourcesData[language] || resourcesData.sr;

  const filteredResources = resources.filter(resource => {
    const matchesFilter = filter === 'all' || resource.type === filter;
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.author?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getIcon = (type: Resource['type']) => {
    switch (type) {
      case 'book':
        return <Book className="w-5 h-5" />;
      case 'article':
        return <FileText className="w-5 h-5" />;
      case 'video':
        return <Video className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: Resource['type']) => {
    switch (type) {
      case 'book':
        return 'from-blue-600 to-blue-700';
      case 'article':
        return 'from-green-600 to-green-700';
      case 'video':
        return 'from-purple-600 to-purple-700';
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">{t.title}</h2>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.search}
            className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'all'
                ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {t.allResources}
          </button>
          <button
            onClick={() => setFilter('book')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'book'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Book className="w-4 h-4" />
            {t.books}
          </button>
          <button
            onClick={() => setFilter('article')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'article'
                ? 'bg-green-600 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <FileText className="w-4 h-4" />
            {t.articles}
          </button>
          <button
            onClick={() => setFilter('video')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'video'
                ? 'bg-purple-600 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Video className="w-4 h-4" />
            {t.videos}
          </button>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredResources.map((resource) => (
          <div
            key={resource.id}
            className="bg-slate-800/70 border border-slate-700 rounded-lg p-5 hover:border-amber-500/50 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${getTypeColor(resource.type)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                {getIcon(resource.type)}
              </div>
              
              <div className="flex-1">
                <h3 className="font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                  {resource.title}
                </h3>
                {resource.author && (
                  <p className="text-xs text-slate-400 mb-2">
                    {t.author}: {resource.author}
                  </p>
                )}
                <p className="text-sm text-slate-300 mb-3">
                  {resource.description}
                </p>
                {resource.link && (
                  <a
                    href={resource.link}
                    className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 font-medium"
                  >
                    {t.viewResource}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
