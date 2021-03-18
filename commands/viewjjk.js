const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Mon titre')
            .setTitle('PREMIER EP JUJUTSU KAISEN')
            .setDescription('[DERNIER EP JUJUTSU KAISEN](https://voiranime.com/anime/jujutsu-kaisen/jujutsu-kaisen-22-vostfr/)')
            .setColor('RANDOM')
            .addField('Qu\'es ce que jujutsu kaisen?', 'Manga :Jujutsu kaisen est un shonen qui a pour auteur Gege Akutami et pour éditeur Shueisha pour les japonais et Ki-oon pour les français. Sa sortie initial est le 5mars 2018 il est toujours en cours avec 16 volumes a son actifs et il a eu des prépublication chez Weekly Shonen Jump.\n\nAnime :La 1er diffusion de jujutsu kaisen en tant qu’anime c’est la date du 3 octobre 2020 qui est toujours en cours avec 24 épisodes ( un épisode qui sort tous les vendredis),le réalisateur est Sunghoo Park et le Scénariste Hiroshi Seko. Le studio d’animation est MAPPA qui fais en ce moment même la saison4 de l’attaque des titans. Les compositeurs sont Hiroaki Tsutsumi,Yoshimasa Terui et Arisa Okehazama. Pour ces licences au japan on peux le retrouver sur Toho et en France crunchyroll et la chaîne télé ou on peux le regarder sont MBS,TBS (Super Animeism) que au Japon.' , true)
            .setAuthor('SUKUNA', 'https://cdn.discordapp.com/attachments/812298506839654420/821863168811991051/pp_840x830-pad_1000x1000_f8f8f8.jpg', 'https://google.fr')
            .setImage('https://cdn.discordapp.com/attachments/821140895477792809/821822720089653258/jujutsu-kaisen-sukuna-domain-expansion-malevolent-shrine-anime-1242150-1280x0.png')
            .setThumbnail('https://cdn.discordapp.com/attachments/812298506839654420/821863168811991051/pp_840x830-pad_1000x1000_f8f8f8.jpg')
            .setFooter('Heure du message', 'https://cdn.discordapp.com/attachments/821140895477792809/821822674212093982/sukuna-1-1.png')
            .setTimestamp()
            .setURL('https://voiranime.com/anime/jujutsu-kaisen/jujutsu-kaisen-01-vostfr/'))
    },
    name: 'viewjjk'
}