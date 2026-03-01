import { 
  User, Settings, Share2, Edit3, 
  FileText, Image, Bookmark, File, 
  Mail, Globe, Twitter, Github, Linkedin, Calendar,
  Heart, Users, UserPlus, Activity 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Header from '../about/components/Header';
import Footer from '../about/components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-stone-100">
      <Header />
      {/* Основной контейнер */}
      <div className="container mx-auto px-4 py-8">
        {/* ШАПКА ПРОФИЛЯ */}
        <Card className="p-6 md:p-8 mb-8 bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg shadow-amber-900/5">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* Аватар */}
            <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-amber-300/50">
              <AvatarImage src="/love.PNG" alt="@username" />
              <AvatarFallback className="bg-amber-100 text-amber-800">
                <User className="w-12 h-12" />
              </AvatarFallback>
            </Avatar>

            {/* Информация */}
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-bold text-amber-900">
                  Данила Староверов
                </h1>
                <Badge variant="secondary" className="text-sm bg-amber-100 text-amber-800 border-amber-300">
                  @DonCruza
                </Badge>
              </div>
              <p className="text-lg text-amber-700">
                Преподаватель "26 КАДР"
              </p>
              <p className="text-amber-600/80 max-w-2xl">
                Даю задания, пью кока-колу и кайфую от мучений учеников
              </p>
            </div>

            {/* Кнопки действий */}
            <div className="flex gap-2 self-start md:self-center">
              <Button variant="outline" size="icon" className="rounded-full border-amber-300 text-amber-700 hover:bg-amber-100 hover:text-amber-900">
                <Edit3 className="h-4 w-4" />
                <span className="sr-only">Редактировать</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-amber-300 text-amber-700 hover:bg-amber-100 hover:text-amber-900">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Поделиться</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-amber-300 text-amber-700 hover:bg-amber-100 hover:text-amber-900">
                <Settings className="h-4 w-4" />
                <span className="sr-only">Настройки</span>
              </Button>
            </div>
          </div>
        </Card>

        {/* БЛОК СТАТИСТИКИ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: FileText, label: 'Публикации', value: 'нуль' },
            { icon: Users, label: 'Подписчики', value: 'весь 26 КАДР' },
            { icon: UserPlus, label: 'Подписки', value: 'весь препод состав' },
            { icon: Heart, label: 'Лайки', value: 'много-много' },
          ].map((stat, index) => (
            <Card key={index} className="p-4 flex items-center gap-3 bg-white/80 backdrop-blur-sm border-amber-200 shadow-md hover:shadow-lg transition-shadow">
              <stat.icon className="h-8 w-8 text-amber-600" />
              <div>
                <p className="text-2xl font-bold text-amber-900">{stat.value}</p>
                <p className="text-xs text-amber-600">{stat.label}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* ОСНОВНОЙ КОНТЕНТ: ТАБЫ */}
        <Tabs defaultValue="about" className="mb-8">
          <TabsList className="flex justify-center mb-6 bg-amber-100/50 p-1 rounded-full w-full">
            <TabsTrigger 
              value="about" 
              className="px-8 py-2 rounded-full data-[state=active]:bg-amber-600 data-[state=active]:text-white data-[state=active]:shadow-lg text-amber-700"
            >
              Все посты
            </TabsTrigger>
          </TabsList>

          {/* Вкладка "О себе" */}
          <TabsContent value="about" className="space-y-6">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-amber-900">О себе</h2>
              <p className="text-amber-700 mb-6 leading-relaxed">
                Здравствуйте! Вы попали на мой профиль, тут ничего нет, но в жизни есть все :D
                <br /><br />
                В своей работе ценю внимание к деталям, производительность и доступность. Постоянно изучаю новые технологии 
                и лучшие практики.
              </p>

              {/* Навыки (теги) */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-amber-800 mb-3">Навыки</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'UI/UX', 'Node.js', 'GraphQL', 'Jest'].map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="px-3 py-1 border-amber-300 text-amber-700 bg-amber-50"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

            </Card>
          </TabsContent>

          {/* Остальные вкладки (заглушки) */}
          <TabsContent value="media">
            <Card className="p-6 text-center bg-white/80 backdrop-blur-sm border-amber-200 text-amber-600">
              Контент медиа появится здесь
            </Card>
          </TabsContent>
          <TabsContent value="docs">
            <Card className="p-6 text-center bg-white/80 backdrop-blur-sm border-amber-200 text-amber-600">
              Документы появятся здесь
            </Card>
          </TabsContent>
          <TabsContent value="favorites">
            <Card className="p-6 text-center bg-white/80 backdrop-blur-sm border-amber-200 text-amber-600">
              Избранные материалы появятся здесь
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}