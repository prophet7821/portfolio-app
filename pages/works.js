import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
//import { WorkGridItem } from "../components/grid-item";
import Construction from './construction';
// import thumbInkdrop from "../public/images/works/inkdrop_eyecatch.png";
// import thumbWalknote from "../public/images/works/walknote_eyecatch.png";

const Works = () => (
  <Layout title="Works">
    <Container>
      {/* <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading> */}

      <Construction/>
      {/* <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="walknote"
            thumbnail={thumbWalknote}
          >
            Music recommendation app for iOS
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}

      <Section delay={0.2}>
        <Divider my={6} />
      </Section>
    </Container>
  </Layout>
);

export default Works;
