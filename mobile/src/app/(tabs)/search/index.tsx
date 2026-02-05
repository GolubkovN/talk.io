import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { PressableOpacity } from 'pressto';
import { FlatList, Text, View } from 'react-native';

type Item = {
  id: number;
  name: string;
  image: string;
  text: string;
};

const names = [
  'Alex', 'Blake', 'Casey', 'Drew', 'Emery', 'Finn', 'Gray', 'Harper',
  'Indie', 'Jules', 'Kai', 'Logan', 'Mason', 'Nico', 'Oakley', 'Parker',
  'Quinn', 'Riley', 'Sawyer', 'Taylor', 'Uma', 'Vale', 'Wren', 'Xan',
  'Yael', 'Zion',
];
const blurbs = [
  'Loves sketching and sunny parks.',
  'Always ready for a new adventure.',
  'Collects stickers and tiny gadgets.',
  'Dreams in bright, bold colors.',
  'Enjoys cozy cafes and rainy days.',
  'Can talk about comics for hours.',
];
const data: Item[] = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1;
  const name = `${names[index % names.length]} ${String.fromCharCode(65 + (index % 26))}.`;
  return {
    id,
    name,
    image: `https://api.dicebear.com/7.x/thumbs/png?seed=${encodeURIComponent(name)}`,
    text: blurbs[index % blurbs.length],
  };
});

export default function SearchIndex() {

  const renderItem = ({ item }: { item: Item }) => {
    return (
      <Link href={{
        pathname: '/(users)/[id]',
        params: { id: item.id.toString(), name: item.name, text: item.text, image: item.image },
      }} push asChild>
        <PressableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16, paddingVertical: 8 }}>
            <Image
              source={item.image}
              style={{ width: 100, height: 100, borderRadius: 50 }}
            />
            <View>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
              <Text style={{ fontSize: 14, color: '#666' }} ellipsizeMode="tail" numberOfLines={3}>{item.text}</Text>
            </View>
          </View>
        </PressableOpacity>
      </Link>
    );
  };

  return <FlatList
    data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      style={{ padding: 16, backgroundColor: '#fff' }}
    />
  ;
}
